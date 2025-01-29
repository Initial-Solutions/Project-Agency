import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer
      className={
        'relative flex w-full flex-col items-center justify-center gap-8 px-8 py-8 pb-4 md:py-16 md:pb-8'
      }
    >
      <div
        className={
          'flex w-3/4 flex-col justify-between gap-8 sm:w-full sm:flex-row md:w-3/4'
        }
      >
        <div className={'flex flex-col gap-4'}>
          <h4 className={'text-lg font-semibold italic'}>Our services</h4>
          <div className={'flex flex-col gap-2 text-sm font-light'}>
            <Link to={'.'} className={'hover:underline'}>
              E-commerce
            </Link>
            <Link to={'.'} className={'hover:underline'}>
              Corporate Website
            </Link>
            <Link to={'.'} className={'hover:underline'}>
              MVP Development
            </Link>
          </div>
        </div>
        <div className={'flex flex-col gap-4 sm:text-center'}>
          <h4 className={'text-lg font-semibold italic'}>Legal Information</h4>
          <div className={'flex flex-col gap-2 text-sm font-light'}>
            <Link to={'.'} className={'hover:underline'}>
              Terms of services
            </Link>
            <Link to={'.'} className={'hover:underline'}>
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className={'flex flex-col gap-4 sm:text-right'}>
          <h4 className={'text-lg font-semibold italic'}>Follow us</h4>
          <div className={'flex flex-col gap-2 text-sm font-light'}>
            <Link to={'.'} className={'hover:underline'}>
              Facebook
            </Link>
            <Link to={'.'} className={'hover:underline'}>
              Twitter
            </Link>
            <Link to={'.'} className={'hover:underline'}>
              Linkedin
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          'flex w-3/4 flex-row justify-between gap-8 sm:w-full md:w-3/4'
        }
      >
        <h3 className={'w-full text-sm font-extralight italic md:w-1/2'}>
          Made with ❤️&nbsp; by Initial Solutions Team
        </h3>
        <span
          className={
            'w-full text-sm font-extralight italic sm:text-right md:w-1/2'
          }
        >
          2025 © Initial Solutions
        </span>
      </div>
    </footer>
  );
}
