import * as React from "react"
import { cn } from "../../lib/utils"
import { Label } from "./label"

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  error?: string
  description?: string
  htmlFor: string
  children: React.ReactNode
}

export function FormField({ 
  label, 
  error, 
  description, 
  htmlFor, 
  className, 
  children,
  ...props 
}: FormFieldProps) {
  const descriptionId = `${htmlFor}-description`
  const errorId = `${htmlFor}-error`
  
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <Label htmlFor={htmlFor} className={error ? "text-destructive" : ""}>
        {label}
      </Label>
      
      {/* 
        We use React.cloneElement to automatically inject aria-describedby and error props 
        if the child is a single element. In a real highly-robust system, you might use context.
      */}
      {React.isValidElement(children) 
        ? React.cloneElement(children as React.ReactElement<any>, {
            id: htmlFor,
            "aria-describedby": cn(
              description && descriptionId,
              error && errorId
            ),
            "aria-invalid": !!error,
            error: !!error
          }) 
        : children}

      {description && !error && (
        <p id={descriptionId} className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
      
      {error && (
        <p id={errorId} className="text-sm font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
