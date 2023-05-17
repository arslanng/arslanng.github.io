import React from "react";
import photo from "../../img/Image_edited.jpg";

function Context() {
  return (
    <div className="row contentArea d-flex align-items-center">
      <div className="col-12 col-sm-6 photoArea">
        <img src={photo} alt="" srcset="" className="photo w-100 p-5 rounded-pill" />
      </div>
      <div className="col-12 col-sm-6 text">
        <h3 className="mb-3 ozlusoz"><q>Ben bir taşım, bu da benim yuvarlanışım.</q></h3>
        <h4 className="mt-5 mb-3 ozlusoz text-center">
          Ben <strong>Dr. Murat Gökduman</strong>
        </h4>
        <p className="ben text-center">
          İşyeri hekimiyim. Aynı zamanda fonksiyonel tıp yolcusuyum.
        </p>
        <p className="ben text-center">Amatör fotoğrafçıyım.</p>
        <p className="ben text-center">Fullstack web development ile ilgileniyorum.</p>
        <p className="ben text-center">
          En büyük tutkum yeni şeyler öğrenmek. Öğrenmekten büyük haz alıyorum. Bunun için okuyorum, izliyorum ve uyguluyorum.
        </p>
      </div>
    </div>
  );
}

export default Context;
