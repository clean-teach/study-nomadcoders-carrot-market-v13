import Button from '@/app/_components/button';
import Input from '@/app/_components/input';
import Layout from '@/app/_components/layout';
import TextArea from '@/app/_components/textarea';
import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className=" space-y-4 px-4 py-10">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
