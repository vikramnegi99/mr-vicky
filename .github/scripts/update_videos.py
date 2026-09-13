#!/usr/bin/env python3
"""Fetch latest videos from the MR. VICKY YouTube channel RSS feed
and write videos.json for the website. Runs inside GitHub Actions."""
import json
import urllib.request
import xml.etree.ElementTree as ET

CHANNEL_ID = "UCiwp7wlNdKPeFheEvqJFsIg"
RSS_URL = "https://www.youtube.com/feeds/videos.xml?channel_id=" + CHANNEL_ID

NS = {
    "a": "http://www.w3.org/2005/Atom",
    "yt": "http://www.youtube.com/xml/schemas/2015",
    "media": "http://search.yahoo.com/mrss/",
}


def fetch_videos():
    req = urllib.request.Request(RSS_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        xml_data = resp.read()

    root = ET.fromstring(xml_data)
    videos = []
    for entry in root.findall("a:entry", NS):
        vid = entry.find("yt:videoId", NS).text.strip()
        title = (entry.find("a:title", NS).text or "").strip()
        published = entry.find("a:published", NS).text
        link_el = entry.find("a:link", NS)
        url = link_el.get("href") if link_el is not None else "https://www.youtube.com/watch?v=" + vid

        group = entry.find("media:group", NS)
        views = 0
        likes = 0
        desc = ""
        if group is not None:
            desc_el = group.find("media:description", NS)
            if desc_el is not None and desc_el.text:
                # first meaningful line of the description
                for line in desc_el.text.splitlines():
                    line = line.replace("\u200b", "").strip()
                    if line:
                        desc = line[:160]
                        break
            community = group.find("media:community", NS)
            if community is not None:
                stats = community.find("media:statistics", NS)
                if stats is not None:
                    views = int(stats.get("views", "0"))
                rating = community.find("media:starRating", NS)
                if rating is not None:
                    likes = int(rating.get("count", "0"))

        videos.append(
            {
                "id": vid,
                "title": title,
                "url": url,
                "published": published,
                "views": views,
                "likes": likes,
                "description": desc,
                "thumbnail": "https://i.ytimg.com/vi/" + vid + "/hqdefault.jpg",
            }
        )
    return videos


def main():
    videos = fetch_videos()
    data = {
        "channel": "MR. VICKY",
        "channelId": CHANNEL_ID,
        "channelUrl": "https://youtube.com/@mrvickymoney",
        "videoCount": len(videos),
        "videos": videos,
    }
    with open("videos.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Wrote videos.json with", len(videos), "videos")


if __name__ == "__main__":
    main()
