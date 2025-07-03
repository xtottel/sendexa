"use client";

import { useState } from "react";
import {
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
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

interface ContactGroup {
  id: string;
  name: string;
  contactCount: number; 
}

export default function ContactsPage() {
  const [groupName, setGroupName] = useState("");
  const [contactGroups, setContactGroups] = useState<ContactGroup[]>([
    { id: "1", name: "Customers", contactCount: 125 },
    { id: "2", name: "Suppliers", contactCount: 42 },
    { id: "3", name: "Employees", contactCount: 89 },
  ]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<ContactGroup | null>(null);

  const handleOpenAddDialog = () => {
    setGroupName("");
    setAddDialogOpen(true);
  };

  const handleOpenEditDialog = (group: ContactGroup) => {
    setSelectedGroup(group);
    setGroupName(group.name);
    setEditDialogOpen(true);
  };

  const handleOpenDeleteDialog = (group: ContactGroup) => {
    setSelectedGroup(group);
    setDeleteDialogOpen(true);
  };

  const handleAddGroup = () => {
    if (!groupName.trim()) return;
    const newGroup: ContactGroup = {
      id: Date.now().toString(),
      name: groupName,
      contactCount: 0,
    };
    setContactGroups([...contactGroups, newGroup]);
    setGroupName("");
    setAddDialogOpen(false);
  };

  const handleEditGroup = () => {
    if (!groupName.trim() || !selectedGroup) return;
    setContactGroups(
      contactGroups.map((group) =>
        group.id === selectedGroup.id ? { ...group, name: groupName } : group
      )
    );
    setEditDialogOpen(false);
    setSelectedGroup(null);
  };

  const handleDeleteGroup = () => {
    if (!selectedGroup) return;
    setContactGroups(contactGroups.filter((group) => group.id !== selectedGroup.id));
    setDeleteDialogOpen(false);
    setSelectedGroup(null);
    setOpenDropdown(null);
  };

  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling to document
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="flex h-full flex-col" onClick={handleClickOutside}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl">
          Contact Management
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Create and manage your contact groups
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6 lg:flex-row">
        {/* Left Section - Add Contact Group */}
        <div className="w-full lg:w-1/3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              Create Contact Group
            </h2>
            <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800"
                  onClick={handleOpenAddDialog}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Group
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Contact Group</DialogTitle>
                  <DialogDescription>Enter a name for your new contact group.</DialogDescription>
                </DialogHeader>
                <input
                  type="text"
                  id="groupName"
                  className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                  placeholder="Enter group name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddGroup()}
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <button className="mt-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">Cancel</button>
                  </DialogClose>
                  <button
                    className="mt-2 px-4 py-2 rounded bg-blue-600 text-white"
                    onClick={handleAddGroup}
                  >
                    Add Group
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Right Section - Contact Groups Table */}
        <div className="flex-1">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              Contact Groups
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                    >
                      SL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                    >
                      List name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                    >
                      Number of contacts
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
                  {contactGroups.length > 0 ? (
                    contactGroups.map((group, index) => (
                      <tr
                        key={group.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {group.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {group.contactCount}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <div className="relative flex justify-end dropdown-container">
                            <button
                              onClick={(e) => toggleDropdown(group.id, e)}
                              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            >
                              Actions
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            {openDropdown === group.id && (
                              <div className="absolute right-0 top-8 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:ring-gray-600">
                                <div className="py-1">
                                  <Link
                                    href={`/sms/contacts/${group.id}`}
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Contacts
                                  </Link>
                                  
                                  <button
                                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                                    onClick={() => { setOpenDropdown(null); handleOpenEditDialog(group); }}
                                  >
                                    <Pencil className="mr-2 h-4 w-4" />
                                    Edit Group
                                  </button>
                                  <button
                                    className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600"
                                    onClick={() => { setOpenDropdown(null); handleOpenDeleteDialog(group); }}
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete Group
                                  </button>
                                  
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        No contact groups found. Create one to get started.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Contact Group</DialogTitle>
            <DialogDescription>Update the name of your contact group.</DialogDescription>
          </DialogHeader>
          <input
            type="text"
            id="editGroupName"
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditGroup()}
          />
          <DialogFooter>
            <DialogClose asChild>
              <button className="mt-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">Cancel</button>
            </DialogClose>
            <button
              className="mt-2 px-4 py-2 rounded bg-blue-600 text-white"
              onClick={handleEditGroup}
            >
              Save Changes
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Contact Group</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the group &quot;{selectedGroup?.name}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <button className="mt-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">Cancel</button>
            </DialogClose>
            <button
              className="mt-2 px-4 py-2 rounded bg-red-600 text-white"
              onClick={handleDeleteGroup}
            >
              Delete
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
