import sys, json

from FlightRadar24 import FlightRadar24API
fr_api = FlightRadar24API()

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])



def fr24api():

    airport_icao = read_in()

    print(airport_icao)

    readin_airport = fr_api.get_airport(airport_icao)
    return readin_airport

def getFlights(expect=5):
    results = fr_api.get_flights()
    if len(results) > expect:
        results = results[:expect]
    return results

def main():
    print(getFlights())

if __name__ == '__main__':
    main()

# Add a final newline character
