import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui';

function App() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>

      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent dir="rtl">
          <div>Content</div>
        </PopoverContent>
      </Popover>

      <Tooltip>
        <TooltipTrigger>Open</TooltipTrigger>
        <TooltipContent dir="rtl">
          <div>Content</div>
        </TooltipContent>
      </Tooltip>
    </>
  );
}

export default App;
