import { Tags } from "@/common/types/other/tag.types";


export default function TagView({ data }: { data: Tags }) {
    return(
        <pre>
            {JSON.stringify(data, undefined, 2)}
        </pre>
    )
}
