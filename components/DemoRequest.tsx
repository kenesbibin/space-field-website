'use client';
import { useState } from 'react';
import { gql } from '@apollo/client';
import { motion } from 'framer-motion';
import { FileSignature, Shield, Zap, CheckCircle } from 'lucide-react';
import { client } from '@/lib/apollo-client';

// GraphQL Mutation
const CREATE_DEMO_REQUEST = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
      firstName
      lastName
      email
      company
      phoneNumber
      companySize
      projectDetails
      formType
    }
  }
`;

import { useTranslation } from '@/hooks/useTranslation';

export default function DemoRequest() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    company: '',
    companySize: '',
    projectDetails: '',
    formType: 'SpaceField',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneNumber: '',
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<unknown>(null);

  const isSuccess = !!data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phoneNumber: '',
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('demoRequest.form.errors.firstName');
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('demoRequest.form.errors.lastName');
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = t('demoRequest.form.errors.emailRequired');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('demoRequest.form.errors.emailInvalid');
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = t('demoRequest.form.errors.company');
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = t('demoRequest.form.errors.phone');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const result = await client.mutate({
          mutation: CREATE_DEMO_REQUEST,
          variables: { input: formData },
        });
        setData(result.data);
      } catch (err) {
        // Error handling can be added here if needed
        console.error('Error submitting form:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content - Static for SEO */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2">
              <FileSignature className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">{t('demoRequest.badge')}</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              {t('demoRequest.title.prefix')}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t('demoRequest.title.highlight')}
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {t('demoRequest.description')}
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: t('demoRequest.features.item1.title'),
                  desc: t('demoRequest.features.item1.desc'),
                },
                {
                  icon: Zap,
                  title: t('demoRequest.features.item2.title'),
                  desc: t('demoRequest.features.item2.desc'),
                },
                {
                  icon: CheckCircle,
                  title: t('demoRequest.features.item3.title'),
                  desc: t('demoRequest.features.item3.desc'),
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-blue-100">
                    <item.icon className="h-6 w-6 text-purple-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form - Minimal animations */}
          <motion.div
            className="rounded-3xl border-2 border-purple-200 bg-white p-8 shadow-xl lg:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <CheckCircle className="mx-auto mb-6 h-20 w-20 text-green-500" />
                </motion.div>
                <h2 className="mb-2 text-3xl font-bold text-gray-900">{t('demoRequest.success.title')}</h2>
                <p className="text-lg text-gray-600">
                  {t('demoRequest.success.message')}
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-2 text-2xl font-bold text-gray-900">
                  {t('demoRequest.form.title')}
                </h2>
                <p className="mb-8 text-gray-600">
                  {t('demoRequest.form.description')}
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border-2 ${errors.firstName ? 'border-red-500' : 'border-gray-200'
                          } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200`}
                        placeholder={t('demoRequest.form.placeholders.firstName')}
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border-2 ${errors.lastName ? 'border-red-500' : 'border-gray-200'
                          } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200`}
                        placeholder={t('demoRequest.form.placeholders.lastName')}
                      />
                      {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'
                        } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200`}
                      placeholder={t('demoRequest.form.placeholders.email')}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                      {t('demoRequest.form.labels.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder={t('demoRequest.form.placeholders.phone')}
                      className={`block w-full rounded-lg border-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-200'
                        } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200`}
                    />
                    {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border-2 ${errors.company ? 'border-red-500' : 'border-gray-200'
                        } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200`}
                      placeholder={t('demoRequest.form.placeholders.company')}
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                      {t('demoRequest.form.labels.companySize')}
                    </label>
                    <select
                      name="companySize"
                      id="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    >
                      <option value="">{t('demoRequest.form.placeholders.selectSize')}</option>
                      <option value="1-10">1-10 {t('demoRequest.form.options.employees')}</option>
                      <option value="11-50">11-50 {t('demoRequest.form.options.employees')}</option>
                      <option value="51-200">51-200 {t('demoRequest.form.options.employees')}</option>
                      <option value="201-1000">201-1000 {t('demoRequest.form.options.employees')}</option>
                      <option value="1000+">1000+ {t('demoRequest.form.options.employees')}</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">
                      {t('demoRequest.form.labels.projectDetails')}
                    </label>
                    <textarea
                      name="projectDetails"
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      placeholder={t('demoRequest.form.placeholders.projectDetails')}
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? t('demoRequest.form.button.submitting') : t('demoRequest.form.button.submit')}
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-center text-xs text-gray-500">
                  {t('demoRequest.form.footer')}
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


