'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem
} from "@/components/ui/select"
import {
  HiOutlineMapPin,
  HiOutlineArrowLongRight
} from 'react-icons/hi2'
import {
  HiOutlinePhone,
  HiOutlineMail
} from 'react-icons/hi'

const Contact = () => {
  const [service, setService] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    const data = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      service,
      message: form.message.value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        alert("Message sent successfully.")
        form.reset()
        setService("")
      } else {
        alert("Failed to send message.")
      }
    } catch (err) {
      console.error(err)
      alert("An error occurred.")
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 3,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div>
                <h2 className="h2 mb-6">
                  Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Please don’t hesitate to contact me if you are interested in my work.
                </p>
              </div>
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+261 38 45 278 47</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>marchary08@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Fianarantsoa, Madagascar</span>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="flex flex-col gap-6 items-start" onSubmit={handleSubmit}>
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input id="firstname" name="firstname" placeholder="First name" required />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input id="lastname" name="lastname" placeholder="Last name" required />
                  </div>
                </div>

                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input id="email" name="email" placeholder="youremail@gmail.com" required />
                </div>

                <div className="w-full">
                  <Label htmlFor="service">
                    I'm interested in <span className="text-accent">*</span>
                  </Label>
                  <Select required onValueChange={(val) => setService(val)}>
                    <SelectTrigger id="service" className="w-full !h-12 bg-white/5 border-white/10 px-4">
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="webdev">Web Development</SelectItem>
                      <SelectItem value="uiux">UI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full">
                  <Label htmlFor="message">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="write your message..."
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-lg btn-accent">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Send message</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
