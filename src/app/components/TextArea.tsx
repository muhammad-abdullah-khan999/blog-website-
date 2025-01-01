"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "../../hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

export const FormSchema = z.object({
  comment: z
    .string()
    .min(2, {
      message: "Please write something",
    })
    .max(160, {
      message: "Comment must not be longer than 30 characters.",
    }),
})


  




export function TextareaForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  


  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Your comment has been saved:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-secondary p-4">
          <code className="text-white">{data.comment}</code>
        </pre>
      ),
    })
    }

   

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="mt-10">
              <FormLabel className=" text-2xl">Comment:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write you thoughts here..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Comments will be dissappeared after the page reload.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Comment</Button>
      </form>
    </Form>
  )
}
