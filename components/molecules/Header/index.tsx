import { Container } from '../../atoms/Container';

export const Header = () => {
  return (
    <header className="flex h-24 items-center sm:h-32">
      <Container>
        <div className="flex items-start text-2xl font-black text-blue-900">
          Company
          <span className="ml-2 h-3 w-3 rounded-full bg-purple-600"></span>
        </div>
        <div className="flex items-center">
          <nav className="hidden items-center text-lg text-purple-900 lg:flex">
            <a href="#" className="flex py-2 px-8 hover:text-purple-700">
              Home
            </a>
            <a href="#" className="flex py-2 px-8 hover:text-purple-700">
              Service
            </a>
            <a href="#" className="flex py-2 px-8 hover:text-purple-700">
              Portfolio
            </a>
            <a href="#" className="flex py-2 px-8 hover:text-purple-700">
              Contact us
            </a>
          </nav>
          <button className="ml-4 flex flex-col">
            <span className="mb-1 h-1 w-6 rounded-full bg-purple-800"></span>
            <span className="mb-1 h-1 w-6 rounded-full bg-purple-800"></span>
            <span className="mb-1 h-1 w-6 rounded-full bg-purple-800"></span>
          </button>
        </div>
      </Container>
    </header>
  );
};
