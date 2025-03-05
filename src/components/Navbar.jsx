import Button from './Button'; // Update this line

export const Navbar = () => {
  return (
    <nav className="flex justify-end p-10 bg-blue-200 bg-blend-soft-light shadow-lg">
      <Button to="/">Inicio</Button>
    </nav>
  );
};