import React from "react";
import photo from "../../img/Image_edited.jpg";

function Context() {
  return (
    <div className="row contentArea d-flex align-items-center my-5">
      <div className="col-12 col-sm-6 photoArea">
        <img
          src={photo}
          alt=""
          srcset=""
          className="photo w-100 p-5 rounded-pill"
        />
      </div>
      <div className="col-12 col-sm-6 text">
        <h3 className="mb-3 ozlusoz text-center">
          <q>
            Endişelenmeye gerek yok. Ben bir taşım, bu da benim yuvarlanışım.
            Her taş nasıl yuvarlanıyorsa öyle işte
          </q>
        </h3>
        <p className="yazar"><strong>Petra</strong> - <strong>Marianna Coppo</strong></p>
        <h4 className="mt-5 mb-3 name text-center">Ben Dr. Murat Gökduman</h4>
        <p className="ben text-center">
          İşyeri hekimiyim. Aynı zamanda fonksiyonel tıp yolcusuyum. Amatör
          fotoğrafçıyım. Fullstack web development ile ilgileniyorum.
        </p>
        <p className="ben text-center">
          En büyük tutkum yeni şeyler öğrenmek. Öğrenmekten büyük haz alıyorum.
          Bunun için okuyorum, izliyorum ve uyguluyorum.
        </p>
      </div>
    </div>
  );
}

export default Context;
