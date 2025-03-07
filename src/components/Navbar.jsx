import Button from './Button'; // Update this line

export const Navbar = () => {
  return (
    <nav className="flex flex-row-reverse p-10 bg-gradient-to-t from-teal-400 to-cyan-400 bg-blend-soft-light">
      <Button className="bg-gray-100 border-4 border-sky-500 rounded-lg p-1.5 bg-esmerald-400" to="/">Inicio</Button>
    </nav>
  );
};  