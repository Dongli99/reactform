import { useForm } from 'react-hook-form';

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCancel = () => {
    reset(); 
  };

  const validateQuantity = (value) => {
    if (value < 1) {
      return 'Quantity must be at least 1';
    }
    return true;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit) } className="form shadow-lg row g-3 bg-light rounded">

      {/* form title */}
      <p className='fs-1'>New Product</p>

      {/* product name */}
      <div className="form-group">
        <label 
          className='col-sm-3'>
          Product Name:
        </label>
        <input 
          type = 'text'
          className='col-sm-5'
          {...register('productName', { required: true } )}      
        />
      </div>

      {/* Description */}
      <div className="form-group">
        <label 
          className='col-sm-3 align-top'>
          Description:
        </label>
        <textarea 
          className='col-sm-5'
          rows="3"
          {...register('description', { required: true })} 
        />
      </div>

      {/* category */}
      <div className="form-group">
        <label 
          className='col-sm-3'>
          Category:
        </label>
        <select 
          className="col-sm-5"
          defaultValue="3"
          {...register('category', { required: true })}>
          <option value="1">Woman</option>
          <option value="2">Men</option>
          <option value="3">Unisex</option>
        </select>
      </div>

      {/* Quantity */}
      <div className="form-group">
        <label 
          className='col-sm-3'>
        Quantity:
        </label>
        <input 
          type='number'
          className='col-sm-5'
          {...register('quantity', { required: true, validate: validateQuantity } )}      
        />
      </div>

      {/* Price */}
      <div className="form-group">
        <label 
          className='col-sm-3'>
        Price:
        </label>
        <input 
          type='text'
          className='col-sm-5'
          {...register('price', { required: true, pattern:/^\d+(\.\d{1,2})?$/} )}      
        />
      </div>

      {/* buttons */}
      <div className="d-flex justify-content-around">
        <div></div>
        <div></div>
        <button 
          className="d-inline p-2 bg-dark text-white" 
          type="submit">
        Submit
        </button>
        <button 
          className="d-inline p-2 bg-dark text-white" 
          type="reset"
          onClick={handleCancel}>
        Cancel
        </button>
        <div></div>
      </div>

      {/* validation warnings */}
      <div className='text-danger'>
        {errors.productName && <p>Product Name is required!</p>}
        {errors.description && <p>Description is required!</p>}
        {errors.category && <p>category is required!</p>}
        {errors.quantity && <p>{errors.quantity.message}</p>}
        {errors.price && <p>Price must be a positive number!</p>}
      </div>
    </form>
  );
}

export default ReactHookForm;