from xml.etree.ElementTree import Element, SubElement, tostring
from xml.dom.minidom import parseString

def generate_shape(shape, color, shading, x, y):
    """Generates an SVG element for a given shape, approximating game shapes."""
    attributes = {
        "fill": color if shading != "outlined" else "none",
        "stroke": color,
        "stroke-width": "2" if shading != "filled" else "0",  # No stroke if filled
        "stroke-opacity": "0.5" if shading == "half-filled" else "1"  # Semi-transparent for "half-filled"
    }
    
    group = Element('g')  # Group to hold the shapes forming the oval
    
    if shape == "oval":
        # Create the rectangle for the straight sides
        rect = SubElement(group, "rect", x=str(x-15), y=str(y-30), width="30", height="60", **attributes)
        # Add circles on the top and bottom ends
        circle_top = SubElement(group, "circle", cx=str(x), cy=str(y-30), r="15", **attributes)
        circle_bottom = SubElement(group, "circle", cx=str(x), cy=str(y+30), r="15", **attributes)
        # If the shading is half-filled, modify the fill of the top circle to create the effect
        if shading == "half-filled":
            circle_top.set('fill-opacity', '0.5')
        return group
    elif shape == "diamond":
        points = f"{x-30},{y} {x},{y-15} {x+30},{y} {x},{y+15}"
        return Element("polygon", points=points, **attributes)
    elif shape == "squiggle":  # Simplified representation
        # A simple wave-like path for squiggle, for demonstration
        d = f"M {x-30} {y} q 15,-30 30,0 q 15,30 30,0"
        return Element("path", d=d, **attributes)

def generate_card(shape, color, number, shading):
    """Generates an SVG for a card with specified features, with dynamic scaling."""
    svg = Element("svg", width="100%", height="100%", viewBox="0 0 300 200", preserveAspectRatio="xMidYMid meet", xmlns="http://www.w3.org/2000/svg")
    # Adjust position dynamically based on number of shapes
    start_x = 150 - (number-1)*45  # Adjust starting x based on number to center shapes
    for i in range(number):
        svg.append(generate_shape(shape, color, shading, start_x + i*90, 100))  # Adjust spacing based on viewbox
    
    return parseString(tostring(svg)).toprettyxml()

# Shapes, colors, and other features as per the game
shapes = ["oval", "diamond", "squiggle"]
colors = ["red", "green", "blue"]
numbers = [1, 2, 3]
shadings = ["filled", "half-filled", "outlined"]

# Generate SVG for each combination
cards_svg = [generate_card(shape, color, number, shading) for shape in shapes for color in colors for number in numbers for shading in shadings]

# The SVG for the first card, as an example
cards_svg[0]

# save the first card to a file
with open("card_0.svg", "w") as f:
    f.write(cards_svg[0])