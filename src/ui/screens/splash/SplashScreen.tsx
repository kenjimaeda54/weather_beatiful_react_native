import { Container, Lottie } from "./styleSplash";

interface ISplashScreenProps {
  onAnimationFinish: () => void;
}

export default function SplashScreen({ onAnimationFinish }: ISplashScreenProps) {
  return (
    <Container>
      <Lottie
        source={require("../../../../assets/looties/splash.json")}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </Container>
  )
}