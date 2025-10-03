export default function Modal({ title, text, isopen, isclose }) {
  if (!isopen) return null; 

  return (
    <div className="fixed inset-0 z-10 flex justify-center items-start bg-black bg-opacity-40 duration-300">
      <div className="bg-blue-300 rounded-md p-6 w-[90%] md:w-[35%] shadow-lg animate-fadeIn">
        <div className="flex flex-col gap-5 text-center">
          <h2 className="font-bold text-lg">{title}</h2>
          <span className="font-light">{text}</span>
          <button
            onClick={isclose}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 duration-200"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
