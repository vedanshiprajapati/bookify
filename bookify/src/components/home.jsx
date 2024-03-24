import { Link } from 'react-router-dom';
import Input from './input';
import Button from './button';
import Header from './Header';
import { useState } from 'react';

export default function Component() {
  return (
    <div className="bg-gray-50">
     <Header/>
      <section className="py-12">
        <div className="container grid gap-4 px-4 md:grid-cols-2 md:gap-8 md:px-6">
          <div className="flex items-center space-x-4 mt-20 ">
            <form className="flex gap-2">
              <Input id="title" placeholder="Title" required />
              <Input id="author" placeholder="Author" required />
              <Input id="genre" placeholder="Genre" required />
              <Button className="w-full" type="submit">
                Add Book
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-200">
        <div className="container px-4 py-8 md:px-6">
          <div className="overflow-hidden border border-gray-200 rounded-lg dark:border-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/6 px-4 py-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Title
                    </th>
                    <th className="w-1/6 px-4 py-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Author
                    </th>
                    <th className="w-1/6 px-4 py-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Genre
                    </th>
                    <th className="w-1/6 px-4 py-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  <tr className="bg-gray-50 ">
                    <td className="px-4 py-2 text-sm">To Kill a Mockingbird</td>
                    <td className="px-4 py-2 text-sm">Harper Lee</td>
                    <td className="px-4 py-2 text-sm">Fiction</td>
                    <td className="px-4 py-2 space-x-2 text-sm text-right">
                      <Button size="xs">Update</Button>
                      <Button size="xs" variant="outline">
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 ">
                    <td className="px-4 py-2 text-sm">1984</td>
                    <td className="px-4 py-2 text-sm">George Orwell</td>
                    <td className="px-4 py-2 text-sm">Science Fiction</td>
                    <td className="px-4 py-2 space-x-2 text-sm text-right">
                      <Button size="xs">Update</Button>
                      <Button size="xs" variant="outline">
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 ">
                    <td className="px-4 py-2 text-sm">Pride and Prejudice</td>
                    <td className="px-4 py-2 text-sm">Jane Austen</td>
                    <td className="px-4 py-2 text-sm">Romance</td>
                    <td className="px-4 py-2 space-x-2 text-sm text-right">
                      <Button size="xs">Update</Button>
                      <Button size="xs" variant="outline">
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> 
    </div>
  )
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
