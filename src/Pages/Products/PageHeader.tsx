import { TagDto } from '../../api/types'
import { Button } from '../../components/Button'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'

type Props = {
  tags: TagDto[]
  onTagClick: (id: string) => void
  selectedTag?: string
}

export const PageHeader = ({ tags, onTagClick, selectedTag }: Props) => {
  return (
    <Stack gap={50}>
      <SectionTitle main="our" secondary="production" />
      <Stack>
        {tags.map((tag) => (
          <Button
            inverse={selectedTag === tag.id}
            key={tag.id}
            bgColor="textInverse"
            onClick={() => {
              onTagClick(tag.id)
            }}
          >
            {tag.namePlural}
          </Button>
        ))}
      </Stack>
      <Button outlined bgColor="background">
        go to catalog
      </Button>
    </Stack>
  )
}
