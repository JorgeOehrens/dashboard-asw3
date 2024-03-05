import { useRef } from "react";

const UploadFile = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  function handleOpenImgUpload() {
    inputRef.current.click();
  }

  return (
    <>
          <div className="clss ">
        <h1 className="text-5xl leading-[120%] font-semibold text-[var(--color-gray-6)] dark:text-white">
          KYC
        </h1>
        <p className="text-[var(--color-gray-6)] dark:text-white mt-3">
        Fill in the corresponding fields with your information
        </p>
      </div>
      <h6 className="mt-5 text-2xl leading-[150%] font-bold dark:text-white text-[var(--color-gray-6)]">
        Upload DNI Front 
      </h6>
      <form className="mt-5">
        <div className="text-center border border-dashed rounded-lg px-2 py-10 lg:py-[103px]">
          <span className="material-symbols-outlined !text-[var(--color-gray-6)] flex items-center justify-center dark:!text-white">
            cloud_upload
          </span>
          <h4 className="text-2xl leading-[150%] text-[var(--color-gray-5)] dark:text-white my-5">
            Drag and drop Files Here to Upload
          </h4>
          <span className="text-base leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            PNG, JPG Max 100mb.
          </span>
          <div className="mt-8">
            <button
              onClick={handleOpenImgUpload}
              className="px-3 py-2 bg-[var(--color-primary)] rounded-lg text-[#F8FAFC]"
            >
              Browse
            </button>
            <input
              required
              id="imgUpload"
              type="file"
              className="hidden"
              ref={inputRef}
            />
          </div>
        </div>
        <h6 className="text-2xl leading-[150%] font-bold dark:text-white text-[var(--color-gray-6)] mt-6">
        Upload DNI Back
        </h6>
        <div className="text-center border border-dashed rounded-lg px-2 py-10 lg:py-[103px] mt-6">
          <span className="material-symbols-outlined !text-[var(--color-gray-6)] flex items-center justify-center dark:!text-white">
            cloud_upload
          </span>
          <h4 className="text-2xl leading-[150%] text-[var(--color-gray-5)] dark:text-white my-5">
            Drag and drop Files Here to Upload
          </h4>
          <span className="text-base leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
          PNG, JPG Max 100mb.
          </span>
          <div className="mt-8">
            <button
              onClick={handleOpenImgUpload}
              className="px-3 py-2 bg-[var(--color-primary)] rounded-lg text-[#F8FAFC]"
            >
              Browse
            </button>
            <input
              required
              id="imgUpload"
              type="file"
              className="hidden"
              ref={inputRef}
            />
          </div>
        </div>


        <div className="flex items-center gap-5">
        <div className="mt-5 w-1/2">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            First Name
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="Insert first name"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>
       
        <div className="mt-5 w-1/2">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Last name
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="Insert last name"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>
        </div>
        <div className="flex items-center gap-5">
        <div className="mt-5 w-1/2">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Celphone
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="Insert number"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>
       
        <div className="mt-5 w-1/2">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Email
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="Insert Email"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>
        </div>

        <div className="flex items-center gap-5">
        <div className="mt-5 w-1/2">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Bank Name
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="Insert Bank name"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>
       
        <div className="mt-5 w-1/2">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Account Type
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="Insert Account type   "
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>
        </div>
        <div className="flex items-center gap-5">
        <div className="mt-5 w-1/2">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Account Number
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="Insert Account Number"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>
       
        <div className="mt-5 w-1/2">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            RUT
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="Insert RUT   "
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>
        </div>




        
       
   
    
        <div className="flex items-center justify-between mt-4 sm:mt-8">
          <button className="px-3 py-2 bg-[var(--color-primary)] rounded-lg text-[#F8FAFC]">
            Submit
          </button>
          
        </div>
      </form>
    </>
  );
};

export default UploadFile;
