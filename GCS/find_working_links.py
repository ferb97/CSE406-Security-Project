import requests
import re

# Read from output file
with open("gcs1.txt", "r") as txt:
    string = txt.read()

# Format links
links = re.findall(r'https://[^\s]+', string)

# Write to output file
with open("formatted_links.txt", "w") as output:
    for link in links:
        output.write(link+"\n")

# Find working links
with open("formatted_links.txt", "r") as linkFile, open("working_links.txt", "w") as workLinkFile:

    # Read all links
    links = linkFile.readlines()
    working_links_count = 0
    for link in links:
        link = link.strip()
        try:
            response = requests.get(link)

            # See inside the links if we get a success code
            if(response.status_code == 200):
                json_data = response.json()
                if "items" in json_data and len(json_data["items"]) > 0:

                    # Get media link
                    media_link = json_data["items"][0].get("mediaLink")
                    content_type = json_data["items"][0].get("contentType")
                    media_link_response = requests.get(media_link)
                    if media_link_response.status_code == 200:

                        # Output to file if media link is accessible
                        working_links_count += 1
                        print(media_link)
                        workLinkFile.write(str(working_links_count) + ". Link: " + link + "\n")
                        workLinkFile.write("Media Link: " + media_link + "\n")
                        workLinkFile.write("File Type: " + content_type + "\n\n")

                        
        except Exception as e:
            print(f'{str(e)}')

