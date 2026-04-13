import { useState } from "react";

function Form({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    category: "",
  });

  const handleForm = (e) => {
    e.preventDefault();

    if (form.title && form.price && form.category) {
      onSubmit(form);

      setForm({
        title: "",
        price: 0,
        category: "",
      });
    }
  };

  return (
    <section className="flex justify-center">
      <form onSubmit={handleForm}>
        <fieldset>
          <legend className="font-black text-4xl">Koda Batch 7 Store</legend>
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="product-name">Product Name:</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              id="product-name"
              name="title"
              placeholder="Enter product name"
              required
              className="border p-2 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="price">Price:</label>
            <input
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              type="number"
              id="price"
              name="price"
              min="0"
              placeholder="Rp. "
              required
              className="border p-2 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="category">Category:</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              id="category"
              name="category"
              className="border p-2 rounded-lg"
            >
              <option value="">--Select a category--</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <button className="border p-2 rounded-lg bg-green-400">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default Form;
