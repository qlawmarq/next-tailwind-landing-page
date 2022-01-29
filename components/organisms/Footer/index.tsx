import { Container } from '../../atoms/Container';

export const Footer = () => {
  return (
    <footer className="pt-12 pb-6">
      <Container>
        <div>
          <div className="m-auto flex flex-col sm:flex-row">
            <div className="mt-3">© Copyright 2020. All Rights Reserved.</div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
