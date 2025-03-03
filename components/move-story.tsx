interface MoveStoryProps {
    story: string;
}

export function MoveStory({ story }: MoveStoryProps) {

    return (
        <div className="bg-background p-4 rounded-lg shadow-sm mt-4">
            <p className="text-sm text-muted-foreground italic">{story}</p>
        </div>
    );
}
