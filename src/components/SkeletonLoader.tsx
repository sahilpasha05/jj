export function SkeletonLoader() {
  return (
    <div className="space-y-4 p-4">
      <div className="skeleton-base h-8 w-3/4"></div>
      <div className="skeleton-base h-4 w-full"></div>
      <div className="skeleton-base h-4 w-5/6"></div>
    </div>
  );
}

export function SkeletonBrandCard() {
  return (
    <div className="card-mobile">
      <div className="skeleton-base h-24 w-24 mx-auto mb-4 rounded-2xl"></div>
      <div className="skeleton-base h-4 w-3/4 mx-auto"></div>
    </div>
  );
}

export function SkeletonPhoneCard() {
  return (
    <div className="phone-model-card">
      <div className="skeleton-base w-full aspect-square rounded-2xl mb-3"></div>
      <div className="skeleton-base h-4 w-3/4 mb-2"></div>
      <div className="skeleton-base h-3 w-1/2 mx-auto"></div>
    </div>
  );
}

export function SkeletonFullPage() {
  return (
    <div className="space-y-6 p-4 pb-24">
      <div className="skeleton-base h-10 w-2/3 mb-8"></div>
      <SkeletonBrandCard />
      <SkeletonBrandCard />
      <SkeletonBrandCard />
    </div>
  );
}

export function SkeletonListItem() {
  return (
    <div className="card-mobile">
      <div className="flex items-center gap-3">
        <div className="skeleton-base h-12 w-12 rounded-full flex-shrink-0"></div>
        <div className="flex-1 space-y-2">
          <div className="skeleton-base h-4 w-2/3"></div>
          <div className="skeleton-base h-3 w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
