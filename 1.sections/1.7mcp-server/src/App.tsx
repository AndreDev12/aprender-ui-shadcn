import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Kbd,
  KbdGroup,
} from '@/components/ui';

function App() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Use{' '}
          <KbdGroup>
            <Kbd>Ctrl + B</Kbd>
            <Kbd>Ctrl + K</Kbd>
          </KbdGroup>{' '}
          to open the command palette
        </p>
      </div>
    </>
  );
}

export default App;
