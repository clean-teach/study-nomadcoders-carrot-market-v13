import Button from '@/app/_components/button';
import Input from '@/app/_components/input';
import Layout from '@/app/_components/layout';
import type { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack title="Edit Profile">
      <form className="space-y-4 px-4 py-10">
        <div className="flex items-center space-x-3">
          <div className="h-14 w-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input required label="Email address" name="email" type="email" />
        <Input
          required
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        <Button text="Update profile" />
      </form>
    </Layout>
  );
};

export default EditProfile;
