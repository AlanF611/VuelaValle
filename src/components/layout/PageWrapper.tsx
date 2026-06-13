interface PageWrapperProps {
  children: React.ReactNode;
}

// Adds bottom clearance on mobile so MobileCTA bar (~72px) doesn't overlap content.
export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="pb-[72px] lg:pb-0">
      {children}
    </div>
  );
}
