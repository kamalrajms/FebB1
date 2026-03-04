import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1

  const inputref = useRef();
  const focusinput = () => {
    inputref.current.focus();
  };
  //eg2

  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  //eg3
  const [newProduct, setNewProduct] = useState(true);
  const [imageURL, setImageURl] = useState("");
  const imgRef = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURl(preview);
      setNewProduct(false);
    }
  };
  return (
    <div>
      {/* eg1 */}
      <div>
        <input type="text" placeholder="Enter name" ref={inputref} />
        <button onClick={focusinput}>Focus input</button>
      </div>
      {/* eg2 */}
      <div>
        <h3>Timer: {sec}</h3>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </div>
      {/* eg3 */}
      <div>
        <input type="file" ref={imgRef} hidden onChange={handleImage} />
        {newProduct ? (
          <div className="image-box" onClick={() => imgRef.current.click()}>
            upload image
          </div>
        ) : (
          <img onClick={() => imgRef.current.click()} className="org-image" src={imageURL} alt="" />
        )}
      </div>
    </div>
  );
}
