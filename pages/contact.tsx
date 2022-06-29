import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toastNotification } from '@/lib/toastNotification';
import { HeadOpenGraph, CustomInput, TextFieldInput, FormGroupLabel } from '@/components/index';

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
      message: data.message,
    };

    const { status } = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParameters,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    );

    if (status == 200) {
      toastNotification(
        'success',
        `Thank you ${name} for your message. I will get back to you as soon as possible.`,
        5000
      );
      reset();
    } else {
      toastNotification('error', 'Error occured. Try again.');
    }
  };

  return (
    <>
      <HeadOpenGraph
        title='Contact Me'
        description='Contact Edson Jaramillo for any questions or inquiries.'
        image='https://media.graphassets.com/Hxh7E2dMQkG80kY4j8Jn'
        alt={`Edson Jaramillo's Web Development Portfolio`}
      />

      <div className='contact'>
        <div className='contact__grid'>
          <span className='contact__greeting'>GOT A QUESTION?</span>
          <h1 className='contact__header'>Contact Me</h1>
          <span className='contact__subheader'>
            I hope to help and answer any questions you might have. I look forward to hearing from
            you.
          </span>
        </div>
      </div>

      <form
        className='form'
        onSubmit={handleSubmit(onSubmit, () =>
          toastNotification('error', 'Check input requirements.')
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
              req={{
                required: { value: true, message: 'Required' },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              }}
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
          <button type='submit' className='form__button'>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactPage;
