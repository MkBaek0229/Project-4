function Header() {
  return (
    <header className="h-1/5 flex items-center justify-center border-2 border-slate-700">
      <div>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/doodle/48/calendar--v2.png"
          alt="calendar--v2"
        />
      </div>
      <div className="font-rix text-4xl">Today</div>
    </header>
  );
}

export default Header;
