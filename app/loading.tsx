export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 lg:pt-40">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left skeleton */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="h-12 bg-slate-200 rounded-lg w-3/4 mx-auto lg:mx-0 animate-pulse" />
              <div className="h-12 bg-slate-200 rounded-lg w-1/2 mx-auto lg:mx-0 animate-pulse" />
              <div className="h-6 bg-slate-200 rounded-lg w-full mx-auto lg:mx-0 animate-pulse mt-4" />
              <div className="h-6 bg-slate-200 rounded-lg w-4/5 mx-auto lg:mx-0 animate-pulse" />
            </div>
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              <div className="h-14 bg-blue-200 rounded-full w-44 animate-pulse" />
              <div className="h-14 bg-slate-200 rounded-full w-40 animate-pulse" />
            </div>
          </div>
          {/* Right skeleton — phone frame */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[280px] sm:w-[300px] md:w-[320px] aspect-[9/19.5] bg-slate-200 rounded-[3rem] border-[8px] border-slate-300 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
