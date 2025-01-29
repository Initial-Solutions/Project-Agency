export function Footer() {
  return (
    <footer
      className={
        'flex w-full flex-col items-center justify-center gap-8 px-8 py-8 md:py-16'
      }
    >
      <div
        className={
          'flex w-3/4 flex-col justify-between gap-8 sm:w-full sm:flex-row md:w-3/4'
        }
      >
        <div className={'flex flex-col gap-2'}>
          <h4 className={'text-lg font-semibold italic'}>Our services</h4>
          <div className={'flex flex-col gap-2 text-sm font-light'}>
            <a>E-commerce</a>
            <a>Corporate Website</a>
            <a>MVP Development</a>
          </div>
        </div>
        <div className={'flex flex-col gap-2'}>
          <h4 className={'text-lg font-semibold italic'}>Legal Information</h4>
          <div className={'flex flex-col gap-2 text-sm font-light'}>
            <a>Terms of services</a>
            <a>Privacy Policy</a>
            <a>Sitemap</a>
          </div>
        </div>
        <div className={'flex flex-col gap-2 text-right'}>
          <h4 className={'text-lg font-semibold italic'}>Follow us</h4>
          <div className={'flex flex-col gap-2 text-sm font-light'}>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
          </div>
        </div>
      </div>
      <div
        className={
          'flex w-3/4 flex-col justify-between gap-8 sm:w-full sm:flex-row md:w-3/4'
        }
      >
        <h3 className={'w-1/2 text-sm font-extralight italic'}>
          Made with ❤️&nbsp; by Initial Solutions Team
        </h3>
        <span className={'w-1/2 text-right text-sm font-extralight italic'}>
          2025 © Initial Solutions
        </span>
      </div>
    </footer>
  );
}
