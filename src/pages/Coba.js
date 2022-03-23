import { useState } from "react";

export default function Coba(props) {
  let [nik, setNik] = useState([]);
  let [tgl, setTgl] = useState("");
  let [bln, setBln] = useState("");
  let [thn, setThn] = useState("");

  let check = (nik) => {
    setTgl(nik.nik[(7, 8)]);
  };

  return (
    <div>
      ID
      <input
        type={`number`}
        className="form-control mb-2"
        value={nik}
        onChange={(ev) => setNik(ev.target.value)}
      />
      <button type="button" class="btn btn-dark" onClick={() => check()}>
        Save
      </button>
    </div>
  );
}
