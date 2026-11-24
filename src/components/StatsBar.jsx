const StatsBar = ({ displayCount, ownedCount, ownedTotalQuantity, wishCount, wishTotalQuantity, totalCount, activeTab }) => {
  const isCollection = activeTab === 'collection';
  const isOwned = activeTab === 'owned';
  const isWishlist = activeTab === 'wishlist';

  return (
    <div className="bg-card-bg rounded-2xl shadow-card px-3 sm:px-6 py-3 sm:py-4 mb-6">
      <div className="flex items-center justify-center gap-2 sm:gap-10">
        {/* 图鉴页：显示全部三列 */}
        {isCollection && (
          <>
            <div className="flex items-center gap-1 sm:gap-2">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-accent" fill="#ffbbcdff" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 019.375 12h5.25a.75.75 0 010 1.5h-5.25a.75.75 0 01-.125-.75Z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-[10px] sm:text-xs text-text-secondary">当前显示</p>
                <p className="font-quick text-sm sm:text-lg font-bold text-text-primary">
                  {displayCount} <span className="text-[10px] sm:text-sm font-normal text-text-secondary">/ {totalCount} 件</span>
                </p>
              </div>
            </div>
            <div className="w-px h-8 sm:h-10 bg-accent/20" />
            <div className="flex items-center gap-1 sm:gap-2">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#E62E93]" fill="#FFDA77" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
              </svg>
              <div>
                <p className="text-[10px] sm:text-xs text-text-secondary">已拥有</p>
                <p className="font-quick text-sm sm:text-lg font-bold text-text-primary">
                  {ownedTotalQuantity} <span className="text-[10px] sm:text-sm font-normal text-text-secondary">件 / {ownedCount} 种</span>
                </p>
              </div>
            </div>
            <div className="w-px h-8 sm:h-10 bg-accent/20" />
            <div className="flex items-center gap-1 sm:gap-2">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-red-500" fill="#FF7498" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div>
                <p className="text-[10px] sm:text-xs text-text-secondary">想要</p>
                <p className="font-quick text-sm sm:text-lg font-bold text-text-primary">
                  {wishTotalQuantity} <span className="text-[10px] sm:text-sm font-normal text-text-secondary">件 / {wishCount} 种</span>
                </p>
              </div>
            </div>
          </>
        )}

        {/* 已拥有页：只显示已拥有 */}
        {isOwned && (
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7 text-[#E62E93]" fill="#FFDA77" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
            </svg>
            <div>
              <p className="text-xs text-text-secondary">已拥有</p>
              <p className="font-quick text-lg font-bold text-text-primary">
                {ownedTotalQuantity} 件 / {ownedCount} 种
              </p>
            </div>
          </div>
        )}

        {/* 心愿单页：只显示想要 */}
        {isWishlist && (
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7 text-red-500" fill="#FF7498" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div>
              <p className="text-xs text-text-secondary">想要</p>
              <p className="font-quick text-lg font-bold text-text-primary">
                {wishTotalQuantity} 件 / {wishCount} 种
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsBar;
