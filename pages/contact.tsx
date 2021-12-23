import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toastNotification } from '@/lib/toastNotification';
import {
  HeadOpenGraph,
  CustomInput,
  TextFieldInput,
  FormGroupLabel,
  RadioInput,
} from '@/components/index';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name } = data;

    console.log(data);

    // const templateParameters = {
    //   name: data.name,
    //   email: data.email,
    //   phoneNumber: data.phoneNumber,
    //   choice: data.choice,
    //   message: data.message,
    // };

    // const { status } = await emailjs.send(
    //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    //   templateParameters,
    //   process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    // );

    // if (status == 200) {
    //   toastNotification('success', `Your message was sent, ${name}!`);
    //   reset();
    // } else {
    //   toastNotification('error', 'Error occured. Try again.');
    // }
  };

  return (
    <>
      <HeadOpenGraph
        title='Contact Us'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corporis!'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
      />

      <div className='contact'>
        <div className='contact__grid'>
          <p className='contact__greeting'>GOT A QUESTION?</p>
          <h1 className='contact__header'>Contact Me</h1>
          <p className='contact__subheader'>
            I hope to help and answer any questions you might have. I look forward to hearing
            from you.
          </p>
        </div>
      </div>

      <form
        className='form'
        onSubmit={handleSubmit(onSubmit, () =>
          toastNotification('error', 'Check input fields')
        )}>
        <div className='form__grid responsive-width-form'>
          <FormGroupLabel name='name' label='Name' errors={errors.name}>
            <CustomInput
              type='text'
              name='name'
              placeholder='Jane Doe'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='email' label='Email' errors={errors.email}>
            <CustomInput
              type='text'
              name='email'
              placeholder='janedoe@me.com'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='phone' label='Phone Number' errors={errors.phone}>
            <CustomInput
              type='text'
              name='phone'
              placeholder='0123456789'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          <FormGroupLabel name='message' label='Message' errors={errors.message}>
            <TextFieldInput
              name='message'
              placeholder='Enter Message'
              register={register}
              req={{ required: { value: true, message: 'Required' } }}
            />
          </FormGroupLabel>
          {/* Choice */}
          <FormGroupLabel name='' label='Response Choice' errors={errors.choice}>
            <div className='form__radiogroup'>
              <label className='form__radiolabel' htmlFor='choice-Email'>
                <RadioInput
                  name='choice'
                  value='Email'
                  register={register}
                  req={{ required: { value: true, message: 'Required' } }}
                />
                Email
              </label>
              <label className='form__radiolabel' htmlFor='choice-Phone'>
                <RadioInput
                  name='choice'
                  value='Phone'
                  register={register}
                  req={{ required: { value: true, message: 'Required' } }}
                />
                Phone
              </label>
            </div>
          </FormGroupLabel>
          <button type='submit' className='form__button'>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactPage;
