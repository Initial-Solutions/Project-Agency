import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Button } from '@/components/ui/button.tsx';

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  interest: z.enum(['Corporate Website', 'E-commerce', 'SaaS Platform']),
  phone: z.string().optional(),
  message: z.string().nonempty(),
});

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          interest: data.interest,
          phone: data.phone,
          message: data.message,
        },
        PUBLIC_KEY
      );

      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      console.log('end');
    }
  }

  return (
    <section
      className={
        'flex flex-col items-center justify-center gap-24 bg-black px-8 pb-24 pt-12 md:px-32'
      }
    >
      <div className={'flex w-full flex-col justify-center gap-8 md:flex-row'}>
        <div className={'flex flex-col gap-2 md:w-1/3'}>
          <h2 className={'text-xl font-semibold italic text-white'}>
            Contact us to get your project started !
          </h2>
          <p className="text-sm/6 font-light text-gray-400">
            Tell us about your project needs. Within 48 hours, you'll receive a
            custom quote and an invitation to schedule a consultation where we
            can explore your vision together.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={'flex grow flex-col gap-4 md:grid md:grid-cols-2'}
          >
            <FormField
              name={'name'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Or Company *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name={'email'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name={'interest'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interest *</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={'Select a project type'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={'Corporate Website'}>
                          Corporate Website
                        </SelectItem>
                        <SelectItem value={'E-commerce'}>E-commerce</SelectItem>
                        <SelectItem value={'SaaS Platform'}>
                          SaaS Platform
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name={'phone'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name={'message'}
              render={({ field }) => (
                <FormItem className={'col-span-2'}>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea {...field} className={'w-full p-2'} rows={7} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              variant={'default'}
              className={'mt-2 w-full'}
              type={'submit'}
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
