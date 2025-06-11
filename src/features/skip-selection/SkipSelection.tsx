import SkipGrid from "@/features/skip-selection/components/SkipGrid.tsx";
import {useSelectedSkipItem} from "@/features/skip-selection/hooks/skip.hooks.ts";
import {SelectedSkipSummary} from "@/features/skip-selection/components/SelectedSkipSummary.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronRight, XIcon} from "lucide-react";
import {Sheet, SheetContent} from "@/components/ui/sheet.tsx";
import {ThemeToggle} from "@/components/theme/theme-toggle.tsx";

function SkipSelection() {
    const [selectedSkip, setSelectedSkip] = useSelectedSkipItem();

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex items-center justify-center">
                <ThemeToggle/>
            </div>

            <div className="mt-5 mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight mb-3">Choose Your Skip Size</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Select the perfect skip size for your project's need
                </p>
            </div>

            <div className="mb-8">
                <SkipGrid/>
            </div>

            {/* Selected Skip Summary Sheet */}
            <Sheet open={!!selectedSkip} onOpenChange={() => setSelectedSkip(selectedSkip)}>
                <SheetContent className="sm:max-w-md overflow-y-auto [&>button]:hidden">
                    <div className="flex justify-end p-2">
                        <XIcon className="size-6 cursor-pointer" onClick={() => setSelectedSkip(null)}/>
                    </div>

                    {selectedSkip && (
                        <div className="pb-4 px-5">
                            <SelectedSkipSummary skip={selectedSkip}/>

                            <span className="text-sm italic text-muted-foreground">
                                Imagery and information shown throughout this website may not reflect the exact shape
                                or size specification, colours may vary, options and/or accessories may be featured at
                                additional cost.
                            </span>

                            <div className="mt-6 flex flex-col gap-3">
                                <Button
                                    className="gap-2 w-full cursor-pointer"
                                    onClick={() => setSelectedSkip(null)}
                                >
                                    Proceed
                                    <ChevronRight className="h-4 w-4"/>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full cursor-pointer"
                                    onClick={() => setSelectedSkip(null)}
                                >
                                    Change Selection
                                </Button>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default SkipSelection;