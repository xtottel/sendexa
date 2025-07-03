"use client";

import { useState } from "react";
import {
  ChevronLeft,
  Plus,
  Pencil,
  Trash2,
  Upload,
  Download,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface Contact {
  id: string;
  phoneNumber: string;
  name: string;
  email: string;
  birthDate: string;
  company: string;
}

export default function ViewContactGroup() {
  const params = useParams();
  const groupId = params?.id;

  const DEFAULT_CONTACTS: Contact[] = [
    {
      id: "1",
      phoneNumber: "+1234567890",
      name: "John Doe",
      email: "john@example.com",
      birthDate: "1990-05-15",
      company: "Acme Inc",
    },
    {
      id: "2",
      phoneNumber: "+1987654321",
      name: "Jane Smith",
      email: "jane@example.com",
      birthDate: "1985-08-22",
      company: "XYZ Corp",
    },
    {
      id: "3",
      phoneNumber: "+1122334455",
      name: "Bob Johnson",
      email: "bob@example.com",
      birthDate: "1978-11-30",
      company: "ABC Ltd",
    },
    {
      id: "4",
      phoneNumber: "+447911123456",
      name: "Alice Brown",
      email: "alice@brown.com",
      birthDate: "1992-03-10",
      company: "Brownies",
    },
  ];

  const [contacts, setContacts] = useState<Contact[]>(DEFAULT_CONTACTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [form, setForm] = useState<Omit<Contact, "id">>({
    phoneNumber: "",
    name: "",
    email: "",
    birthDate: "",
    company: "",
  });

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phoneNumber.includes(searchQuery) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenAddDialog = () => {
    setForm({
      phoneNumber: "",
      name: "",
      email: "",
      birthDate: "",
      company: "",
    });
    setAddDialogOpen(true);
  };

  const handleOpenEditDialog = (contact: Contact) => {
    setSelectedContact(contact);
    setForm({
      phoneNumber: contact.phoneNumber,
      name: contact.name,
      email: contact.email,
      birthDate: contact.birthDate,
      company: contact.company,
    });
    setEditDialogOpen(true);
  };

  const handleOpenDeleteDialog = (contact: Contact) => {
    setSelectedContact(contact);
    setDeleteDialogOpen(true);
  };

  const handleAddContact = () => {
    if (!form.name.trim() || !form.phoneNumber.trim()) return;
    const newContact: Contact = {
      id: Date.now().toString(),
      ...form,
    };
    setContacts([...contacts, newContact]);
    setAddDialogOpen(false);
  };

  const handleEditContact = () => {
    if (!selectedContact) return;
    setContacts(
      contacts.map((c) =>
        c.id === selectedContact.id ? { ...selectedContact, ...form } : c
      )
    );
    setEditDialogOpen(false);
    setSelectedContact(null);
  };

  const handleDeleteContact = () => {
    if (!selectedContact) return;
    setContacts(contacts.filter((c) => c.id !== selectedContact.id));
    setDeleteDialogOpen(false);
    setSelectedContact(null);
    setOpenDropdown(null);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".dropdown-container")) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="space-y-6" onClick={handleClickOutside}>
      <div className="flex items-center justify-between">
        <Link
          href="/sms/contacts"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Contact Groups
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl">
          {groupId ? `Group ${groupId} Contacts` : "Customer Contacts"}
        </h1>
        <div></div> {/* Spacer for alignment */}
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex space-x-2">
            <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
              <DialogTrigger asChild>
                <button
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800"
                  onClick={handleOpenAddDialog}
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Add Contact
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Contact</DialogTitle>
                  <DialogDescription>
                    Fill in the contact details below.
                  </DialogDescription>
                </DialogHeader>
                <input
                  type="text"
                  className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="text"
                  className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                  placeholder="Phone Number"
                  value={form.phoneNumber}
                  onChange={(e) =>
                    setForm({ ...form, phoneNumber: e.target.value })
                  }
                />
                <input
                  type="email"
                  className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="date"
                  className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                  placeholder="Birth Date"
                  value={form.birthDate}
                  onChange={(e) =>
                    setForm({ ...form, birthDate: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                  placeholder="Company"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <button className="mt-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">
                      Cancel
                    </button>
                  </DialogClose>
                  <button
                    className="mt-2 px-4 py-2 rounded bg-blue-600 text-white"
                    onClick={handleAddContact}
                  >
                    Add Contact
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <Upload className="mr-1 h-4 w-4" />
              Import
            </button>
            <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <Download className="mr-1 h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Birth Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact) => (
                  <>
                    <tr
                      key={contact.id}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                        (editDialogOpen &&
                          selectedContact?.id === contact.id) ||
                        (deleteDialogOpen && selectedContact?.id === contact.id)
                          ? "bg-blue-50 dark:bg-blue-900/30"
                          : ""
                      }`}
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {contact.phoneNumber}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {contact.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {contact.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {contact.birthDate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {contact.company}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <div className="relative flex justify-end">
                          <button
                            onClick={e => { e.stopPropagation(); toggleDropdown(contact.id); }}
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                          >
                            Actions
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </button>
                          
                          {openDropdown === contact.id && (
                            <div className="dropdown-container absolute right-0 top-8 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                              <div className="py-1">
                                <button
                                  className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    handleOpenEditDialog(contact);
                                  }}
                                >
                                  <Pencil className="mr-2 h-4 w-4" />
                                  Edit
                                </button>
                                <button
                                  className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600"
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    handleOpenDeleteDialog(contact);
                                  }}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                    {editDialogOpen && selectedContact?.id === contact.id && (
                      <tr>
                        <td
                          colSpan={6}
                          className="px-6 py-4 bg-blue-50 dark:bg-blue-900/30"
                        >
                          <Dialog open={true} onOpenChange={setEditDialogOpen}>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Contact</DialogTitle>
                                <DialogDescription>
                                  Update the contact details below.
                                </DialogDescription>
                              </DialogHeader>
                              <input
                                type="text"
                                className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                                placeholder="Name"
                                value={form.name}
                                onChange={(e) =>
                                  setForm({ ...form, name: e.target.value })
                                }
                              />
                              <input
                                type="text"
                                className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                                placeholder="Phone Number"
                                value={form.phoneNumber}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    phoneNumber: e.target.value,
                                  })
                                }
                              />
                              <input
                                type="email"
                                className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                                placeholder="Email"
                                value={form.email}
                                onChange={(e) =>
                                  setForm({ ...form, email: e.target.value })
                                }
                              />
                              <input
                                type="date"
                                className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                                placeholder="Birth Date"
                                value={form.birthDate}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    birthDate: e.target.value,
                                  })
                                }
                              />
                              <input
                                type="text"
                                className="block w-full mb-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                                placeholder="Company"
                                value={form.company}
                                onChange={(e) =>
                                  setForm({ ...form, company: e.target.value })
                                }
                              />
                              <DialogFooter>
                                <DialogClose asChild>
                                  <button className="mt-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">
                                    Cancel
                                  </button>
                                </DialogClose>
                                <button
                                  className="mt-2 px-4 py-2 rounded bg-blue-600 text-white"
                                  onClick={handleEditContact}
                                >
                                  Save Changes
                                </button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </td>
                      </tr>
                    )}
                    {deleteDialogOpen && selectedContact?.id === contact.id && (
                      <tr>
                        <td
                          colSpan={6}
                          className="px-6 py-4 bg-red-50 dark:bg-red-900/30"
                        >
                          <Dialog
                            open={true}
                            onOpenChange={setDeleteDialogOpen}
                          >
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Delete Contact</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to delete the contact
                                  &quot;{selectedContact?.name}&quot;? This
                                  action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <button className="mt-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">
                                    Cancel
                                  </button>
                                </DialogClose>
                                <button
                                  className="mt-2 px-4 py-2 rounded bg-red-600 text-white"
                                  onClick={handleDeleteContact}
                                >
                                  Delete
                                </button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </td>
                      </tr>
                    )}
                  </>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    No contacts found matching your search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
