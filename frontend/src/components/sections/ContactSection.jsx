import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Container } from '@/components/common/Primitives'

export function ContactSection({ form, details, features }) {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')

    const formElement = event.currentTarget
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('error')
      return
    }

    const formData = new FormData(formElement)
    formData.append('access_key', accessKey)
    formData.append('subject', form.subject)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        formElement.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Datos de contacto
            </p>
            <div className="space-y-8">
              {details.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <Icon className="mt-1 size-5 shrink-0 text-accent" />
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em]">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="mt-1 text-base text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                      {item.email && (
                        <a
                          href={`mailto:${item.email}`}
                          className="mt-1 block text-base text-primary hover:text-accent"
                        >
                          {item.email}
                        </a>
                      )}
                      {item.phone && (
                        <p className="text-base text-muted-foreground">
                          {item.phone}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 space-y-6 border-t border-border pt-10">
              {features.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <Icon className="mt-1 size-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-base text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <Card className="rounded-lg border border-border shadow-2xl shadow-primary/5">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">{form.fields.name.label}</Label>
                  <Input
                    id="name"
                    name="name"
                    variant="underline"
                    placeholder={form.fields.name.placeholder}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{form.fields.email.label}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="underline"
                    placeholder={form.fields.email.placeholder}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{form.fields.message.label}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    variant="underline"
                    placeholder={form.fields.message.placeholder}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? form.submitting : form.submit}
                </Button>

                {status === 'success' && (
                  <Alert>
                    <AlertDescription>{form.success}</AlertDescription>
                  </Alert>
                )}
                {status === 'error' && (
                  <Alert variant="destructive">
                    <AlertDescription>{form.error}</AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}
