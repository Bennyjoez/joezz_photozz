import { toast } from "react-toastify";

const handleErrors = (error: unknown) => {
  const {data, statusText} = error.response;
    // bad route
    if (data.message && data.message.includes('Cannot find')) {
      toast.error(data.message);
    } else if (data.errors && data.errors.message.includes('date')) {
      toast.error(data.errors.message);
      const target = document.getElementById('date');
      if(target) {
        target.style.backgroundColor = '#ff9d9d';
        setTimeout(() => {
          target.style.backgroundColor = 'inherit';
        }, 6000)
      }
    } else if (data.status == 'Unauthorized') {
      // need to login
      toast(`${data.status}: ${data.error.message}. Please login!`)
    } else if(data.errors && data.errors.code === 11000) {
      // duplicate key error
      toast.error(data.errors.message);
    } else if (statusText === 'Unauthorized') {
      // wrong details
      if (data.error && data.error.message) {
        toast.error(data.error.message)
      }
    }
};

export default handleErrors;