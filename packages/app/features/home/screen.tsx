import {
	Anchor,
	Button,
	H1,
	Paragraph,
	ScrollView,
	Separator,
	Sheet,
	useToastController,
	XStack,
	YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
	const linkProps = useLink({
		href: '/user/nate',
	})

	return (
		<YStack f={1} jc="center" ai="center" p="$4" space>
			<YStack space="$4" bc="$background">
				<H1 ta="center">Welcome to Tamagui.</H1>
				<Paragraph ta="center">
					Here's a basic starter to show navigating from one screen to another. This screen uses the
					same code on Next.js and React Native.
				</Paragraph>

				<Separator />
				<Paragraph ta="center">
					Made by{' '}
					<Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
						@natebirdman
					</Anchor>
					,{' '}
					<Anchor
						color="$color12"
						href="https://github.com/tamagui/tamagui"
						target="_blank"
						rel="noreferrer"
					>
						give it a ⭐️
					</Anchor>
				</Paragraph>
			</YStack>

			<XStack>
				<Button {...linkProps}>Link to user</Button>
			</XStack>

			<SheetDemo />
		</YStack>
	)
}

function SheetDemo() {
	const [open, setOpen] = useState(false)
	const [position, setPosition] = useState(0)
	const toast = useToastController()

	return (
		<>
			<Button
				size="$6"
				icon={open ? ChevronDown : ChevronUp}
				circular
				onPress={() => setOpen((x) => !x)}
			/>
			<Sheet
				modal
				animation="medium"
				open={open}
				onOpenChange={setOpen}
				snapPoints={[45, 100]}
				position={position}
				onPositionChange={setPosition}
				dismissOnSnapToBottom
			>
				<Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
				<Sheet.Frame ai="center" jc="center">
					<Sheet.Handle />
					<ScrollView>
						<Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident consectetur ex nostrum illum. Sunt atque animi repellat dicta mollitia odit est, iusto doloribus! Libero iusto ab totam eius quis?, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aliquid, nam id libero, consequuntur perspiciatis in quis, odit ducimus voluptatum dolor suscipit. Earum laboriosam quo, veritatis nisi distinctio alias hic!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad iste, quia similique, numquam laborum omnis modi cum sapiente perferendis voluptate sit minus corporis quas quisquam id debitis adipisci dolorum., Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum fuga accusamus, illum, excepturi hic quia nihil, adipisci voluptatum quod ad minima laborum architecto libero qui. Itaque expedita quo velit reiciendis., Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est cupiditate quibusdam, reiciendis odio accusamus ullam incidunt, eligendi mollitia harum excepturi placeat, id repellendus illum voluptatibus praesentium quae libero ab?
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident consectetur ex nostrum illum. Sunt atque animi repellat dicta mollitia odit est, iusto doloribus! Libero iusto ab totam eius quis?, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aliquid, nam id libero, consequuntur perspiciatis in quis, odit ducimus voluptatum dolor suscipit. Earum laboriosam quo, veritatis nisi distinctio alias hic!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad iste, quia similique, numquam laborum omnis modi cum sapiente perferendis voluptate sit minus corporis quas quisquam id debitis adipisci dolorum., Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum fuga accusamus, illum, excepturi hic quia nihil, adipisci voluptatum quod ad minima laborum architecto libero qui. Itaque expedita quo velit reiciendis., Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est cupiditate quibusdam, reiciendis odio accusamus ullam incidunt, eligendi mollitia harum excepturi placeat, id repellendus illum voluptatibus praesentium quae libero ab?
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident consectetur ex nostrum illum. Sunt atque animi repellat dicta mollitia odit est, iusto doloribus! Libero iusto ab totam eius quis?, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aliquid, nam id libero, consequuntur perspiciatis in quis, odit ducimus voluptatum dolor suscipit. Earum laboriosam quo, veritatis nisi distinctio alias hic!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad iste, quia similique, numquam laborum omnis modi cum sapiente perferendis voluptate sit minus corporis quas quisquam id debitis adipisci dolorum., Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum fuga accusamus, illum, excepturi hic quia nihil, adipisci voluptatum quod ad minima laborum architecto libero qui. Itaque expedita quo velit reiciendis., Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est cupiditate quibusdam, reiciendis odio accusamus ullam incidunt, eligendi mollitia harum excepturi placeat, id repellendus illum voluptatibus praesentium quae libero ab?
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident consectetur ex nostrum illum. Sunt atque animi repellat dicta mollitia odit est, iusto doloribus! Libero iusto ab totam eius quis?, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aliquid, nam id libero, consequuntur perspiciatis in quis, odit ducimus voluptatum dolor suscipit. Earum laboriosam quo, veritatis nisi distinctio alias hic!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad iste, quia similique, numquam laborum omnis modi cum sapiente perferendis voluptate sit minus corporis quas quisquam id debitis adipisci dolorum., Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum fuga accusamus, illum, excepturi hic quia nihil, adipisci voluptatum quod ad minima laborum architecto libero qui. Itaque expedita quo velit reiciendis., Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est cupiditate quibusdam, reiciendis odio accusamus ullam incidunt, eligendi mollitia harum excepturi placeat, id repellendus illum voluptatibus praesentium quae libero ab?</Paragraph>
					</ScrollView>
				</Sheet.Frame>
			</Sheet>
		</>
	)
}
