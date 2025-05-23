import { Grid, IconAccessory, Icons, List, TextAccessory } from "@project-gauntlet/api/components";
import { ReactElement, useState } from "react";
import { useStorage } from "@project-gauntlet/api/hooks";

export default function GridView(): ReactElement {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    const [val1, setValue1] = useStorage("grid-view-test-1", undefined);
    const [val2, setValue2] = useStorage("grid-view-test-2", { " test": "test" });
    const [val3, setValue3] = useStorage("grid-view-test-3", "");
    const [val4, setValue4] = useStorage<string>("grid-view-test-4", "");

    const [searchText, setSearchText] = useState<string | undefined>("");

    return (
        <Grid>
            <Grid.SearchBar
                placeholder={"Search something..."}
                value={searchText}
                onChange={setSearchText}
            />
            <Grid.Section title="Section Before">
                <Grid.Item id="section-title" title="Section Title">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 1 1
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
            </Grid.Section>
            {
                numbers.map(value => {
                    const title = "Title " + value;

                    if (title.toLowerCase().includes(searchText?.toLowerCase() ?? "")) {
                        return (
                            <Grid.Item id={"title-" + value} title={"Title " + value}>
                                <Grid.Item.Content>
                                    <Grid.Item.Content.Paragraph>
                                        Test Paragraph {value}
                                    </Grid.Item.Content.Paragraph>
                                </Grid.Item.Content>
                            </Grid.Item>
                        )
                    } else {
                        return undefined
                    }
                })
            }
            <Grid.Section title="Section 1">
                <Grid.Item id="title-section-1-1" title="Title Section 1 1">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 1 1
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item id="title-section-1-2" title="Title Section 1 2">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 1 2
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item id="title-section-1-3" title="Title Section 1 3">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 1 3
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
            </Grid.Section>
            <Grid.Section title="Section 2">
                <Grid.Item id="title-section-2-1" title="Title Section 2 1">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 1
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item
                    id="title-section-2-2"
                    title="Title Section"
                    subtitle="Test subtitle"
                    accessory={<IconAccessory icon={Icons.Wallet} tooltip="Tooltip"/>}
                >
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 2
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item id="title-section-2-3" accessory={<IconAccessory icon={Icons.Sun} tooltip="Tooltip"/>}>
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 3
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item id="title-section-2-4" title="Title Section 2 4">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 3
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
            </Grid.Section>
            <Grid.Section title="Section 3">
                <Grid.Item id="title-section-3-1" title="Title Section 3 1">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 1
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item id="title-section-3-2" title="Title Section" subtitle="Test subtitle">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 2
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item id="title-section-3-3">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 2
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item id="title-section-3-4" title="Title Section 3">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 3
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
                <Grid.Item id="title-section-3-5" title="Title Section 3">
                    <Grid.Item.Content>
                        <Grid.Item.Content.Paragraph>
                            Test Paragraph Section 2 4
                        </Grid.Item.Content.Paragraph>
                    </Grid.Item.Content>
                </Grid.Item>
            </Grid.Section>
            <Grid.Section title="Section Other" columns={8}>
                {
                    Array.from({ length: 50 }, (_, k) => k + 1)
                        .map(value => (
                                <Grid.Item id={"title-section-4-" + value}>
                                    <Grid.Item.Content>
                                        <Grid.Item.Content.Paragraph>
                                            Test {value}
                                        </Grid.Item.Content.Paragraph>
                                    </Grid.Item.Content>
                                </Grid.Item>
                            )
                        )
                }
            </Grid.Section>
        </Grid>
    )
}
