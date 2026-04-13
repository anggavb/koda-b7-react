import { useDispatch, useSelector } from "react-redux";

import { add, del } from "@/redux/slices/survey";
import { useState } from "react";

function SurveyRedux() {
  const survey = useSelector((state) => state.survey);
  const dispatch = useDispatch();

  const [form, setForm] = useState([]);

  const onChangeForm = (e) => {
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        setForm((prevState) => {
          return {
            ...prevState,
            cigarette: [...(prevState.cigarette || []), e.target.id],
          };
        });
        return;
      }
      setForm((prevState) => {
        return {
          ...prevState,
          cigarette: prevState.cigarette.filter((c) => c !== e.target.id),
        };
      });
      return;
    }
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add(form));
  };

  return (
    <div className="w-screen h-[calc(100vh-20rem)] flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-screen text-center border max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Survey Perokok Koda</h1>
        <div className="text-left mx-4 flex flex-col gap-4">
          <div>
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              onChange={onChangeForm}
              type="text"
              name="name"
              id="name"
              className="border ml-2"
            />
          </div>
          <div>
            <label htmlFor="age">
              <b>Umur</b>
            </label>
            <input
              onChange={onChangeForm}
              type="number"
              name="age"
              id="age"
              className="border ml-2"
            />
          </div>
          <div className="flex gap-2">
            <label>
              <b>Jenis Kelamin</b>
            </label>
            <input onChange={onChangeForm} type="radio" name="gender" id="L" />
            <label htmlFor="L">Laki-laki</label>
            <input onChange={onChangeForm} type="radio" name="gender" id="P" />
            <label htmlFor="P">Perempuan</label>
          </div>
          <div>
            <label htmlFor="is-smoker">
              <b>Apakah anda seorang perokok?</b>
            </label>
            <select
              onChange={onChangeForm}
              name="smoker"
              id="is-smoker"
              className="border ml-2"
            >
              <option value="false" disabled selected>
                Silahkan Pilih
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label>
              <b>Brand rokok yang digunakan?</b>
            </label>
            <div>
              <input
                onChange={onChangeForm}
                type="checkbox"
                name="cigarette"
                id="sampoerna"
              />
              <label htmlFor="sampoerna">Sampoerna</label>
            </div>
            <div>
              <input
                onChange={onChangeForm}
                type="checkbox"
                name="cigarette"
                id="gg"
              />
              <label htmlFor="gg">Gudang Garam</label>
            </div>
            <div>
              <input
                onChange={onChangeForm}
                type="checkbox"
                name="cigarette"
                id="djarum"
              />
              <label htmlFor="djarum">Djarum Super</label>
            </div>
            <div>
              <input
                onChange={onChangeForm}
                type="checkbox"
                name="cigarette"
                id="marlboro"
              />
              <label htmlFor="marlboro">Marlboro</label>
            </div>
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      {survey.survey.length ? (
        <table className="w-full max-w-md mt-8 bg-amber-100 border *:border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Smoker</th>
              <th>Cigarette</th>
            </tr>
          </thead>
          {survey.survey.map((s) => (
            <tbody>
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>{s.gender}</td>
                <td>{s.smoker}</td>
                <td>{s.cigarette?.join(", ")}</td>
                <td>
                  <button
                    onClick={() => dispatch(del(s))}
                    className="bg-red-500 text-white py-1 px-2 rounded mt-2 mb-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <p>Data not found!</p>
      )}
    </div>
  );
}

export default SurveyRedux;
