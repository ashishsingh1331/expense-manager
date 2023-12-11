
const Eye = ({hide, hidePassword}) => { 
  return (
    <>
    {hide ? (

        <i
          className="fa-regular fa-eye absolute right-8 md:right-16 top-[120px] cursor-pointer opacity-75"
          onClick={hidePassword}
        ></i>
    ) : (

        <i
          className="fa-regular fa-eye-slash absolute right-8 md:right-16 top-[120px] cursor-pointer opacity-75"
          onClick={hidePassword}
        ></i>
    )}
    </>
  );
};

export default Eye;
