'use client'
import { useEffect, useState } from 'react'
import { Button } from './Button'
import { MailIcon } from './SocialIcons'
import { Badge, Textarea } from 'flowbite-react'
import { normalizePhoneInput } from '@/lib/normalizePhoneInput'
import { HiOutlineCheck, HiOutlineX } from 'react-icons/hi'

export default function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>('')
  const [emailStatus, setEmailStatus] = useState<string | undefined>()

  const handlePhoneInputChange = (phone: string) => {
    setPhoneNumber((prevState: string | undefined) =>
      normalizePhoneInput(phone, prevState),
    )
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const from = encodeURI(event.target.from.value)
    const phone = encodeURI(event.target.phone.value)
    const firstName = encodeURI(event.target.fname.value)
    const lastName = encodeURI(event.target.lname.value)
    const subject = encodeURI(event.target.subject.value)
    const message = encodeURI(event.target.message.value)

    const apiRes = await fetch(
      `/api/sendEmail?from=${from}&phone=${phone}&firstName=${firstName}&lastName=${lastName}&subject=${subject}&message=${message}`,
      { method: 'POST' },
    )

    if (apiRes.status === 200) setEmailStatus('sent')
    else setEmailStatus('error')
  }

  useEffect(() => {
    if (emailStatus) setTimeout(() => setEmailStatus(''), 6000)
  }, [emailStatus])

  return (
    <>
      <form
        // action={}
        onSubmit={(e) => handleSubmit(e)}
        className="mt-24 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <div className="">
          <div className="my-4 flex max-w-full justify-center">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              id="from"
              name="from"
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
            <input
              type="tel"
              aria-label="Phone number"
              required
              placeholder="Phone number"
              id="phone"
              value={phoneNumber}
              onChange={(e) => handlePhoneInputChange(e.target.value)}
              name="phone"
              className="ml-2 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
          </div>
          <div className="my-4 flex max-w-full">
            <input
              type="text"
              placeholder="First name"
              aria-label="First name"
              required
              id="fname"
              name="fname"
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              aria-label="Last name"
              id="lname"
              name="lname"
              className="ml-2 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
          </div>
          <div className="my-4 max-w-full">
            <Textarea
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              id="subject"
              placeholder="Subject"
              required
              rows={1}
            />
          </div>
          <div className="my-4 max-w-full">
            <Textarea
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              id="message"
              placeholder="Leave a message at the tone....beeeeep."
              required
              rows={4}
            />
          </div>
          <div className="flex max-w-md flex-row">
            <Button type="submit" className="flex-none">
              Send message
            </Button>
            <div className="mx-3 my-auto">
              {emailStatus === 'sent' && (
                <Badge className="px-4" color="success" icon={HiOutlineCheck}>
                  Message sent successfully
                </Badge>
              )}
              {emailStatus === 'error' && (
                <Badge className="px-4" color="failure" icon={HiOutlineX}>
                  Message failed to send
                </Badge>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
