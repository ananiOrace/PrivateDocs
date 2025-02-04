/* eslint-disable react/no-unescaped-entities */
import {
  EnvelopeClosedIcon,
  PersonIcon,
  CalendarIcon,
  ArchiveIcon,
  FileIcon,
} from "@radix-ui/react-icons";

export default function UserDetails() {
  return (
    <div className="w-100 mt-4">
      <div className="col col-12 d-flex justify-content-center align-items-center bg-primary bg-opacity-25 position-relative">
        <div className="fs-5 py-4">Pentatonic</div>
        <button className="position-absolute d-flex justify-content-center align-items-center end-10 h-50 fs-5 py-2 px-4 rounded-pill bg-primary text-white">
          Modifier
        </button>
      </div>

      <div className="border p-4">
        <div className="pt-4 pb-8 fs-5">Détails de l'admin</div>
        <div className="d-flex row row-cols-lg-4 row-cols-sm-1 gap-lg-0 gap-sm-4">
          <div className="d-flex  gap-3 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center bg-primary bg-opacity-25 p-2"
              style={{ width: "45px", height: "45px", borderRadius: "100%" }}
            >
              <EnvelopeClosedIcon color="blue" width={25} height={25} />
            </div>
            <div>
              <div className="fw-bold fs-5">Adresse e-mail</div>
              <div className="fs-5"> aaaa@aaaa.aaa </div>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center bg-primary bg-opacity-25 p-2"
              style={{ width: "45px", height: "45px", borderRadius: "100%" }}
            >
              <PersonIcon color="blue" width={25} height={25} />
            </div>
            <div>
              <div className="fw-bold fs-5">Prénom</div>
              <div className="fs-5"> Charles </div>
            </div>
            <div>
              <div className="fw-bold fs-5">Nom</div>
              <div className="fs-5"> Baudelaire </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-4 mt-4">
        <div className="d-flex row row-cols-lg-4 row-cols-sm-1 gap-lg-0 gap-sm-4">
          <div className="d-flex  gap-3 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center bg-primary bg-opacity-25 p-2"
              style={{ width: "45px", height: "45px", borderRadius: "100%" }}
            >
              <FileIcon color="blue" width={25} height={25} />
            </div>
            <div>
              <div className="fw-bold fs-5">Documents</div>
              <div className="fs-5"> 123 </div>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center bg-primary bg-opacity-25 p-2"
              style={{ width: "45px", height: "45px", borderRadius: "100%" }}
            >
              <PersonIcon color="blue" width={25} height={25} />
            </div>
            <div>
              <div className="fw-bold fs-5">Utilisateurs</div>
              <div className="fs-5"> 241 </div>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center bg-primary bg-opacity-25 p-2"
              style={{ width: "45px", height: "45px", borderRadius: "100%" }}
            >
              <ArchiveIcon color="blue" width={25} height={25} />
            </div>
            <div>
              <div className="fw-bold fs-5">Taille des fichiers</div>
              <div className="fs-5"> 3.5 GB </div>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div
              className="d-flex justify-content-center align-items-center bg-primary bg-opacity-25 p-2"
              style={{ width: "45px", height: "45px", borderRadius: "100%" }}
            >
              <CalendarIcon color="blue" width={25} height={25} />
            </div>
            <div>
              <div className="fw-bold fs-5">Dernière utilisation</div>
              <div className="fs-5"> 16-04-2002 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
