hamilton = [6417,7001,6229,6407,6501,6211,6609,6219,6411,6423,6503,6513]
hastings = [6609, 6602]
new_plymouth = [6417,6404,6411,6423,6416,6418]
palmerston_north = [7001,6407,6412,6503,6513]
rotorua = [6229,6211,6210,6219,6228,6503]
taupo = [7001,6501,6609,6503,6513]
tauranga = [6357,6363,6371]
thames = [6357,6363,6371]
wellington = [7001,6501,6503,6513]

file_input = open("AKL-MNK-1.txt", "r")
file = file_input.read()
file = file.split('\n')

choose = hastings
for line in file:
    for item in choose:
        if str(item) in line:
            print(line)
file_input.close()
