import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toastNotification } from '@/lib/toastNotification';

interface ErrorMessageType {
  message: string;
}

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name } = data;

    const templateParameters = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      choice: data.choice,
      message: data.message,
    };

    const { status } = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParameters,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    );

    if (status == 200) {
      toastNotification('success', `Your message was sent, ${name}!`);
      reset();
    } else {
      toastNotification('error', 'Error occured. Try again.');
    }
  };

  const ErrorMessage = ({ message }: ErrorMessageType) => (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className='form__errormessage'>
      {message}
    </motion.p>
  );

  return (
    <>
      <div className='contact'>
        <div className='contact__grid'>
          <h2 className='contact__greeting'>GOT A QUESTION?</h2>
          <h1 className='contact__header'>Contact Me</h1>
          <h3 className='contact__subheader'>
            {`I hope to help and answer any questions you might have. I look
            forward to hearing from you.`}
          </h3>
        </div>
      </div>

      <form
        className='form'
        onSubmit={handleSubmit(onSubmit, () =>
          toastNotification('error', 'Check input fields')
        )}>
        <div className='form__grid responsive-width-form'>
          <div className='form__inputgroup'>
            <label className='form__label' htmlFor='name'>
              Name
              {errors.name?.type === 'required' && <ErrorMessage message='Required' />}
            </label>

            <input
              className='form__input'
              placeholder='Jane Doe'
              {...register('name', { required: true })}
            />
          </div>
          {/* Email */}
          <div className='form__inputgroup'>
            <label className='form__label' htmlFor='email'>
              Email
              {errors.email?.type === 'required' && <ErrorMessage message='Required' />}
            </label>

            <input
              className='form__input'
              placeholder='janedoe@me.com'
              {...register('email', { required: true })}
            />
          </div>
          {/* Phone Number */}
          <div className='form__inputgroup'>
            <label className='form__label' htmlFor='phoneNumber'>
              Phone Number
            </label>
            <input
              className='form__input'
              placeholder='1234567890'
              {...register('phoneNumber')}
            />
          </div>

          {/* Message */}
          <div className='form__inputgroup'>
            <label className='form__label '>
              Message
              {errors.message?.type === 'required' && <ErrorMessage message='Required' />}
            </label>

            <textarea
              className='form__input form--textarea'
              placeholder='Enter message...'
              rows={10}
              {...register('message', { required: true })}></textarea>
          </div>
          {/* Choice */}
          <div className='form__inputgroup'>
            <label className='form__label' htmlFor='phoneNumber'>
              Response Choice
              {errors.choice?.type === 'required' && <ErrorMessage message='Required' />}
            </label>

            <div className='form__radiogroup'>
              <label className='form__radiolabel'>
                <input
                  className='form__radioinput'
                  type='radio'
                  id='Email'
                  value='Email'
                  {...register('choice', { required: true })}
                />
                Email
              </label>
              <label className='form__radiolabel'>
                <input
                  className='form__radioinput'
                  type='radio'
                  id='Phone'
                  value='Phone'
                  {...register('choice', { required: true })}
                />
                Phone
              </label>
            </div>
          </div>
          <input className='form__button' type='submit' value='Send Message' />
        </div>
      </form>
    </>
  );
};

export default ContactPage;
