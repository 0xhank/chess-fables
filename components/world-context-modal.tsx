import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { worldHistory } from "@/lib/world-history";

interface WorldContextModalProps {
    open: boolean;
    onClose: () => void;
}

export function WorldContextModal({ open, onClose }: WorldContextModalProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>The World of Chesaria</DialogTitle>
                    <DialogDescription className="text-lg">
                        {worldHistory.overview}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {worldHistory.factions.white.name}
                        </h3>
                        <p className="text-muted-foreground">
                            {worldHistory.factions.white.culture}
                        </p>
                        <p className="mt-2 italic">
                            {worldHistory.factions.white.conflict_role}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {worldHistory.factions.black.name}
                        </h3>
                        <p className="text-muted-foreground">
                            {worldHistory.factions.black.culture}
                        </p>
                        <p className="mt-2 italic">
                            {worldHistory.factions.black.conflict_role}
                        </p>
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={onClose}>Begin Battle</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
} 