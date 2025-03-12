import blockchainImage from "@/assets/blockchain-bg.webp";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-10 backdrop-blur-2xl shadow-sm bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, #0a0a0a, transparent 100%), url('${blockchainImage}')`,
      }}
    >
      <div className="container mx-auto p-4 flex items-center text-white justify-between">
        <div className="font-bold text-lg text-white">Voysa</div>
      </div>
    </nav>
  );
};

export default Navbar;
